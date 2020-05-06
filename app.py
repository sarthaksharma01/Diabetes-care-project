import flask
import pickle
import sklearn
import ctypes
import pandas as pd
import warnings
warnings.filterwarnings('ignore')
print (ctypes.sizeof(ctypes.c_voidp))

from sklearn.externals import joblib
print('The scikit-learn version is {}.'.format(sklearn.__version__))

# Use pickle to load in the pre-trained model.
with open('./model/diabetes_prediction.pkl', 'rb') as f:
    model = pickle.load(f)
    print(model)
input_variables =[[1,100,67,25,94,30,0.62,26]]
    
                                    #    columns=['Pregnancies', 'Glucose', 'BloodPressure','SkinThickness','Insulin','BMI','DiabetesPedigreeFunction','Age'],
                                    #    dtype=float)
prediction = model.predict(input_variables)
print(type(prediction))

# mj=joblib.load('./model/model_joblib')


app = flask.Flask(__name__, template_folder='templates')
@app.route('/', methods=['GET', 'POST'])
def main():
    if flask.request.method == 'GET':
        return(flask.render_template('main.html'))
    if flask.request.method == 'POST':
        Pregnancies = flask.request.form['Pregnancies']
        Glucose = flask.request.form['Glucose']
        BloodPressure = flask.request.form['BloodPressure']
        SkinThickness = flask.request.form['SkinThickness']
        Insulin = flask.request.form['Insulin']
        Bmi = flask.request.form['BMI']
        DiabetesPedigreeFunction = flask.request.form['DiabetesPedigreeFunction']
        Age = flask.request.form['Age']
        input_variables = pd.DataFrame([[Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,Bmi,DiabetesPedigreeFunction,Age]],
                                       columns=['Pregnancies', 'Glucose', 'BloodPressure','SkinThickness','Insulin','Bmi','DiabetesPedigreeFunction','Age'],
                                       dtype=float)
        prediction = model.predict(input_variables)
        p=None
        for i in prediction:
            p=i
        prediction=p
        r=None
        print(type(prediction))
        if prediction == 1:
            r="There are 75.5 percent chances that you have diabetes" 
        elif prediction == 0:
            r="Yo do not have Diabetes"
        return flask.render_template('main.html',
                                     original_input={'Pregnancies':Pregnancies,
                                                     'Glucose':Glucose,
                                                     'BloodPressure':BloodPressure,
                                                     'SkinThickness':SkinThickness,
                                                     'Insulin':Insulin,
                                                     'Bmi':Bmi,
                                                     'DiabetesPedigreeFunction':DiabetesPedigreeFunction,
                                                     'Age':Age
                                                     },
                                     result=r,
                                     )
if __name__ == '__main__':
    app.run()