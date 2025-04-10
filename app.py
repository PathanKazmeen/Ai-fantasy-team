from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/predict', methods=['GET'])
def predict_team():
    df = pd.read_csv('players.csv')

    # Sort by avg_points and pick top 11
    best_team = df.sort_values(by='avg_points', ascending=False).head(11)

    team_list = best_team['name'].tolist()
    return jsonify({'team': team_list})

if __name__ == '__main__':
    app.run(debug=True)
