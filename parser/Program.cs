using System;
using System.IO;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Text.Json;
using System.Text.Json.Serialization;

class Answer
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
            string questionsFilePath = "biologia.txt";
            string answersFilePath = "zaruceneSpravneOdpovede.txt";
            string orderFilePath = "correctOrder.txt";
            
            List<Question> questions = ParseQuestions(questionsFilePath);
            ParseCorrectAnswers(answersFilePath, questions);
            ParseNewOrder(orderFilePath, questions);
            
            Console.WriteLine($"Successfully parsed {questions.Count} questions from {questionsFilePath}");
            
            // Print questions with different IDs
            PrintQuestionsWithDifferentIds(questions);
            
            // Export to JSON
            ExportToJson(questions, "output.json");
            Console.WriteLine("Questions exported to output.json");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
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
                currentQuestion.Text = line.Trim(); // Keep the number in the question text
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
                Console.WriteLine($"Error: Could not find question matching text: '{questionText}'");
            }
        }
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
        Console.WriteLine("\nQuestions with different IDs:");
        Console.WriteLine("----------------------------");
        
        foreach (var question in questions)
        {
            if (question.NewId != 0 && question.Number != question.NewId)
            {
                Console.WriteLine($"Question {question.Number} (New ID: {question.NewId}): {question.Text}");
            }
        }
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
} 