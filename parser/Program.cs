using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

namespace parser;

internal class Answer
{
    [JsonPropertyName("text")]
    public string Text { get; set; }
    
    [JsonPropertyName("isCorrect")]
    public bool IsCorrect { get; set; }

    public char Key { get; set; }

    public Answer(char key, string text)
    {
        Key = key;
        Text = text;
        IsCorrect = false;
    }
}

class Question
{
    [JsonPropertyName("id")]
    public int Number { get; set; }
    
    [JsonPropertyName("newId")]
    public int NewId { get; set; }
    
    [JsonPropertyName("question")]
    public string Text { get; set; }
    
    [JsonPropertyName("answers")]
    public List<Answer> Answers { get; set; }

    public Question()
    {
        Answers = new List<Answer>();
        NewId = 0; // Default value indicating no new ID assigned
    }
}

class Program
{
    static void Main(string[] args)
    {
        try
        {
            // Read questions from output.json
            string json = File.ReadAllText("output.json");
            List<Question> questions = JsonSerializer.Deserialize<List<Question>>(json);
            
            Console.WriteLine($"Successfully read {questions.Count} questions from output.json");
            
            // Check NewId uniqueness
            CheckNewIdUniqueness(questions);
            
            // Print questions with different IDs
            //PrintQuestionsWithDifferentIds(questions);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }

    private static void Parse()
    {
        string questionsFilePath = "biologia.txt";
        string answersFilePath = "zaruceneSpravneOdpovede.txt";
        string orderFilePath = "correctOrder.txt";
            
        List<Question> questions = ParseQuestions(questionsFilePath);
        ParseCorrectAnswers(answersFilePath, questions);
        ParseNewOrder(orderFilePath, questions);
            
        Console.WriteLine($"Successfully parsed {questions.Count} questions from {questionsFilePath}");
            
        // Export to JSON
        ExportToJson(questions, "output.json");
        Console.WriteLine("Questions exported to output.json");
    }

    static List<Question> ParseQuestions(string filePath)
    {
        List<Question> questions = new List<Question>();
        string[] lines = File.ReadAllLines(filePath);
        
        Question currentQuestion = null;
        foreach (string line in lines)
        {
            // Check if line starts with a number followed by a dot (e.g., "1.")
            if (Regex.IsMatch(line, @"^\d+\."))
            {
                if (currentQuestion != null)
                {
                    questions.Add(currentQuestion);
                }
                
                currentQuestion = new Question();
                string[] parts = line.Split(new[] { '.' }, 2);
                currentQuestion.Number = int.Parse(parts[0]);
                currentQuestion.NewId = int.Parse(parts[0]);
                currentQuestion.Text = parts[1].Trim(); // do not Keep the number in the question text
            }
            // Check if line starts with a letter followed by a parenthesis (e.g., "a)")
            else if (Regex.IsMatch(line, @"^[a-h]\)"))
            {
                if (currentQuestion != null)
                {
                    string[] parts = line.Split(new[] { ')' }, 2);
                    char answerKey = parts[0][0];
                    string answerText = parts[1].Trim();
                    currentQuestion.Answers.Add(new Answer(answerKey, answerText));
                }
            }
        }
        
        // Add the last question
        if (currentQuestion != null)
        {
            questions.Add(currentQuestion);
        }
        
        return questions;
    }

    static void ParseCorrectAnswers(string filePath, List<Question> questions)
    {
        string[] lines = File.ReadAllLines(filePath);
        
        foreach (string line in lines)
        {
            string[] parts = line.Split(':');
            if (parts.Length != 2) continue;
            
            int questionNumber = int.Parse(parts[0]);
            string correctAnswers = parts[1].Trim();
            
            // Find the question
            Question question = questions.Find(q => q.Number == questionNumber);
            if (question == null) continue;
            
            // Mark correct answers
            foreach (char correctAnswer in correctAnswers)
            {
                // Find the answer with matching key
                Answer answer = question.Answers.Find(a => a.Key == correctAnswer);
                if (answer != null)
                {
                    answer.IsCorrect = true;
                }
            }
        }
    }

    static void ParseNewOrder(string filePath, List<Question> questions)
    {
        string[] lines = File.ReadAllLines(filePath);
        
        foreach (string line in lines)
        {
            // Extract the question number and text from the line
            // Format: Line      X:         "question": "Y. Question text",
            Match match = Regex.Match(line, @"""question"": ""(\d+)\.\s*(.*?)""");
            if (!match.Success) continue;
            
            int newId = int.Parse(match.Groups[1].Value);
            string questionText = match.Groups[2].Value.Trim();
            
            // Find the question with matching text
            Question question = questions.Find(q => q.Text.Contains(questionText));
            if (question != null)
            {
                question.NewId = newId;
            }
            else
            {
                // Find the best matching question based on common characters
                Question bestMatch = null;
                int maxCommonChars = 0;
                
                foreach (var q in questions)
                {
                    int commonChars = CountCommonCharacters(q.Text, questionText);
                    if (commonChars > maxCommonChars)
                    {
                        maxCommonChars = commonChars;
                        bestMatch = q;
                    }
                }

                if (bestMatch != null && Math.Abs(bestMatch.Text.Length - questionText.Length) < 10)
                {
                    Console.WriteLine($"\nNo exact match found for question text: '{questionText}'");
                    Console.WriteLine($"Using best match (Question {bestMatch.Number}): '{bestMatch.Text}'");
                    Console.WriteLine($"Number of common characters: {maxCommonChars}");
                    bestMatch.NewId = newId;
                }
                else
                {
                    Console.WriteLine($"Error: Could not find any matching question for text: '{questionText}'");
                }
            }
        }
    }

    static int CountCommonCharacters(string str1, string str2)
    {
        // Convert to lowercase for case-insensitive comparison
        str1 = str1.ToLower();
        str2 = str2.ToLower();
        
        // Create character frequency maps
        var freq1 = new Dictionary<char, int>();
        var freq2 = new Dictionary<char, int>();
        
        // Count characters in first string
        foreach (char c in str1)
        {
            if (char.IsLetterOrDigit(c))
            {
                if (freq1.ContainsKey(c))
                    freq1[c]++;
                else
                    freq1[c] = 1;
            }
        }
        
        // Count characters in second string
        foreach (char c in str2)
        {
            if (char.IsLetterOrDigit(c))
            {
                if (freq2.ContainsKey(c))
                    freq2[c]++;
                else
                    freq2[c] = 1;
            }
        }
        
        // Count common characters
        int commonCount = 0;
        foreach (var kvp in freq1)
        {
            if (freq2.TryGetValue(kvp.Key, out int count2))
            {
                commonCount += Math.Min(kvp.Value, count2);
            }
        }
        
        return commonCount;
    }

    static void PrintQuestions(List<Question> questions, int count)
    {
        Console.WriteLine("\nFirst {0} questions:", count);
        Console.WriteLine("-------------------");
        
        for (int i = 0; i < Math.Min(count, questions.Count); i++)
        {
            Question question = questions[i];
            Console.WriteLine($"\nQuestion {question.Number} (New ID: {question.NewId}): {question.Text}");
            
            foreach (var answer in question.Answers)
            {
                string correctIndicator = answer.IsCorrect ? "✓" : " ";
                Console.WriteLine($"[{correctIndicator}] {answer.Key}) {answer.Text}");
            }
        }
    }

    static void PrintQuestionsWithDifferentIds(List<Question> questions)
    {
        using (StreamWriter writer = new StreamWriter("outputDifferentIds.txt"))
        {
            writer.WriteLine("Questions with different IDs:");
            writer.WriteLine("----------------------------");
            
            foreach (var question in questions)
            {
                if (question.NewId != 0 && question.Number != question.NewId)
                {
                    writer.WriteLine($"Question {question.Number} (New ID: {question.NewId}): {question.Text}");
                }
            }
        }
        Console.WriteLine("Questions with different IDs written to outputDifferentIds.txt");
    }

    static void ExportToJson(List<Question> questions, string outputPath)
    {
        var options = new JsonSerializerOptions
        {
            WriteIndented = true,
            Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping
        };
        
        string json = JsonSerializer.Serialize(questions, options);
        File.WriteAllText(outputPath, json);
    }

    static void CheckNewIdUniqueness(List<Question> questions)
    {
        // Dictionary to track used NewIds and their questions
        Dictionary<int, Question> usedIds = new Dictionary<int, Question>();
        HashSet<int> missingIds = new HashSet<int>();
        HashSet<int> duplicateIds = new HashSet<int>();
        
        // Check for duplicates and track used IDs
        foreach (var question in questions)
        {
            if (question.NewId != 0)
            {
                if (usedIds.ContainsKey(question.NewId))
                {
                    duplicateIds.Add(question.NewId);
                }
                else
                {
                    usedIds[question.NewId] = question;
                }
            }
        }
        
        // Check for missing IDs in range 1-1500
        for (int i = 1; i <= 1500; i++)
        {
            if (!usedIds.ContainsKey(i))
            {
                missingIds.Add(i);
            }
        }
        
        // Print results
        Console.WriteLine("\nNewId Validation Results:");
        Console.WriteLine("-----------------------");
        
        if (duplicateIds.Count > 0)
        {
            Console.WriteLine("\nDuplicate NewIds found:");
            foreach (int id in duplicateIds)
            {
                var questionsWithId = questions.Where(q => q.NewId == id).ToList();
                Console.WriteLine($"\nNewId {id} is used by {questionsWithId.Count} questions:");
                foreach (var q in questionsWithId)
                {
                    Console.WriteLine($"- Question {q.Number}({q.NewId}): {q.Text}");
                }
            }
        }
        
        if (missingIds.Count > 0)
        {
            Console.WriteLine($"\nMissing NewIds (total {missingIds.Count}):");
            // Print first 10 missing IDs to avoid overwhelming output
            Console.WriteLine(string.Join(", ", missingIds.Take(100)));
            if (missingIds.Count > 100)
            {
                Console.WriteLine($"... and {missingIds.Count - 10} more");
            }
        }
        
        if (duplicateIds.Count == 0 && missingIds.Count == 0)
        {
            Console.WriteLine("All NewIds are unique and cover the range 1-1500 exactly once.");
        }
    }
}