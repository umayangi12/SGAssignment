# SGAssignment

how to run the code:                                                    
1.Download the repo                                                                                          
2.Type npm run dev in the terminal
  
 Dummy accounts:                                                
 admin login email: admin@gmail.com - password: admin123                                         
 student login email: student@gmail.com - password: student123


this application has two actors named admin and student. They can log in to their accounts using their verified emails from the login dashboard. Once they successfully log in they will redirect to their dashboards by selecting the user type.
Admin can add users to the system, delete users as well as update users. The admin is making the user accounts with a temporary password and an email will send to the user with the temporary password and login link.
 ![Screenshot (198)](https://user-images.githubusercontent.com/89120566/184387666-7decf654-824f-4948-b78c-dee0f0daa099.png)

Once the users successfully log in to the system it will show a successful popup message as well. If the entered email is not saved in the database it will shows an error message and notify to make an account.
On the student side once the student successfully logs in to their dashboard they can add new notes, update them and delete them with a single press.
When the updating and deleting functionalities are successfully done it will show a successful message.

The validation is included for the phone number and the email.


![Screenshot (199)](https://user-images.githubusercontent.com/89120566/184390413-3501aa6c-7008-48e0-9162-095b175e2f77.png)
![Screenshot (201)](https://user-images.githubusercontent.com/89120566/184390443-0cbb1757-9f82-447c-b8df-9225c94c57c3.png)
