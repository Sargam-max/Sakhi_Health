import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load the dataset
# Replace with the correct path to your dataset
data = pd.read_csv('symptom_disease_dataset.csv')  

# Features and target
X = data.drop(columns=['Disease'])
y = data['Disease']

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'symptom_to_disease_model.pkl')
print("Model trained and saved as symptom_to_disease_model.pkl")
