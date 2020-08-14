def matchinWOrds(sentence1, sentence2):
    words1 = sentence1.split(" ")
    words2 = sentence2.split(" ")
    score = 0
    for word1 in words1:
        for word2 in words2:
            if word1.lower() == word2.lower():
                score += 1
    return score
if __name__ == '__main__':
    sentences = ["python is a good", "this is snake", "Deepak is a good boy", "let's become python developer "]
    query = input("Please enter the query string\n")
    score = [matchinWOrds(query, sentence) for sentence in sentences ]
    sortedSentScore = [sentScore for sentScore in sorted(zip(score, sentences), reverse=True) if sentScore[0] !=0]
    print(f"{len(sortedSentScore)} result found!")
    for score, item in sortedSentScore:
        print(f"\"{item}\": with a score of {score}")