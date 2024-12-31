from flask import Flask, request, jsonify
from nltk.sentiment import SentimentIntensityAnalyzer
from flask_cors import CORS

# Initialize the Flask app
app = Flask(__name__)
CORS(app)

# Initialize NLTK's Sentiment Intensity Analyzer
sia = SentimentIntensityAnalyzer()

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    # Get JSON data from the request
    data = request.get_json()
    text = data['text']
    
    # Perform sentiment analysis using NLTK's SentimentIntensityAnalyzer
    sentiment_score = sia.polarity_scores(text)
    
    # Extract the compound score and determine sentiment label
    compound_score = sentiment_score['compound']
    
    if compound_score > 0.1:
        sentiment_label = 'Positive'
    elif compound_score < -0.1:
        sentiment_label = 'Negative'
    else:
        sentiment_label = 'Neutral'
    
    # Return the sentiment label and polarity score
    return jsonify({'sentiment': sentiment_label, 'polarity': compound_score})

if __name__ == '__main__':
    app.run(port=5001)  # Run the Flask app on port 5001
