namespace FiveLetterWordGuess.Models;
public class GameStatistics
{
    public int TotalGames { get; set; }
    public int Wins { get; set; }
    public int Losses => TotalGames - Wins;
    public int CurrentStreak { get; set; }
    public int[] GuessesUsed { get; set; } = default!;
}