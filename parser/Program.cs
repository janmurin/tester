using System;
using System.IO;
using System.Collections.Generic;
using System.Text.RegularExpressions;

class Answer
{
    public char Key { get; set; }
    public string Text { get; set; }
    public bool IsCorrect { get; set; }

    public Answer(char key, string text)
    {
        Key = key;
        Text = text;
        IsCorrect = false;
    }
}

class Question
{
    public int Number { get; set; }
    public string Text { get; set; }
    public Dictionary<char, Answer> Answers { get; set; }

    public Question()
    {
        Answers = new Dictionary<char, Answer>();
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
            
            List<Question> questions = ParseQuestions(questionsFilePath);
            ParseCorrectAnswers(answersFilePath, questions);
            
            Console.WriteLine($"Successfully parsed {questions.Count} questions from {questionsFilePath}");
            
            // Example: Print first 5 questions with correct answers marked
            for (int i = 0; i < Math.Min(5, questions.Count); i++)
            {
                PrintQuestion(questions[i]);
            }
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
                currentQuestion.Text = parts[1].Trim();
            }
            // Check if line starts with a letter followed by a parenthesis (e.g., "a)")
            else if (Regex.IsMatch(line, @"^[a-h]\)"))
            {
                if (currentQuestion != null)
                {
                    string[] parts = line.Split(new[] { ')' }, 2);
                    char answerKey = parts[0][0];
                    string answerText = parts[1].Trim();
                    currentQuestion.Answers[answerKey] = new Answer(answerKey, answerText);
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
                if (question.Answers.ContainsKey(correctAnswer))
                {
                    question.Answers[correctAnswer].IsCorrect = true;
                }
            }
        }
    }

    static void PrintQuestion(Question question)
    {
        Console.WriteLine($"\nQuestion {question.Number}: {question.Text}");
        foreach (var answer in question.Answers.Values)
        {
            string correctIndicator = answer.IsCorrect ? "✓" : " ";
            Console.WriteLine($"[{correctIndicator}] {answer.Key}) {answer.Text}");
        }
    }
} 