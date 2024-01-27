function calculateGrade(scores, customScale) {
    const defaultScale = {
        A: 90,
        B: 80,
        C: 70,
        D: 60,
        F: 0
    };

    const scale = customScale || defaultScale;

    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    for (const grade in scale) {
        if (averageScore >= scale[grade]) {
            return grade;
        }
    }

    return 'F';
}

const userInput = prompt("Enter comma-separated scores (e.g., 85,92,78,90,88):");
const userScores = userInput.split(',').map(score => parseInt(score.trim(), 10));

console.log("User Scores:", userScores);

const finalGrade = calculateGrade(userScores);
console.log(`Final Grade: ${finalGrade}`);

const customGradingScale = {
    A: 95,
    B: 85,
    C: 75,
    D: 65,
    F: 0
};

const customFinalGrade = calculateGrade(userScores, customGradingScale);
console.log(`Final Grade with Custom Scale: ${customFinalGrade}`);
