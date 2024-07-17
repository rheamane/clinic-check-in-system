### DATABASE MODEL 

Table 1: Doctor:
   - doctor_id : UUID,
   - name : text NOT NULL,
   - clinic_address : text NOT NULL,
   - phone_number: text
   - services : text (to include comma separated values for easy traversal),  
   - qualifications : text,
   - specialty : text,
   - about : text,
   - location_url : text (google maps url), 
   - hours text,  -- Example format: "M:0900-1400,1800-2100;T:0900-1400,1800-2100;etc"
   - picture : text, -- URL to the picture // link to supabase storage
   - total_wait_time: numeric (in sec) edge function
   - open: boolean (false-closed, true-open)

Table 2: Queue
   // make a composite key with doctor_id and user_id
   - doctor_id : INT NOT NULL (FOREIGN KEY)
   - user_id : INT NOT NULL (FOREIGN KEY)
   - waitlist_join_time : TIMESTAMP DEFAULT CURRENT_TIMESTAMP (FROM USER)
   - checked_in: boolean (false-not checked in, true-checked in) 

Table 3: User
   - user_id : INT PRIMARY KEY AUTO_INCREMENT,
   - name : text NOT NULL,
   - phone_number : text
   - reason_for_appointment: string // input from select
   - new_patient : BOOLEAN (true - New patient, false - Returning patient) 
   - waitlist_join_time : TIMESTAMP DEFAULT CURRENT_TIMESTAMP


### `/clinic`

1. shows cards for the two clinics
2. address, phone number, speciality

### `/clinic/[id]/`

- [x] Doctor's Name and Picture
- [x] Qualifications
- [x] Address / Map
- [x] Phone Number
- [x] Full week hours - Todays hours and week hours
- [x] Specialities / Services (Functional and Non-Functional)
- [x] Join the waitlist button

### `clinic/[id]/checkin/` (WEBSITE)

1. Form

#### `clinic/id/checkin?atClinic=True` (QR CODE)

1. Form to enter Name and Phone Number

### `clinic/[id]/patient/[UUID]/`

1. Keep track of your ETA // this is the time you are next in line???
2. Button "I am here" and it will solidify your place in the line
3. Cancel my appointment
4. Button that opens the address in google maps
5. A little timer to warn them to check in

### `clinic/[id]/queue` (TV)

1. Shows queue (ex. Ninad K.)
2. Notifies next person when thier turn comes up
3. ETA for walk-ins
4. Check in reminder

### `/doctor`

1. Sign up or log in
2. Set localStorage with supabase auth

### `/doctor/dashboard`

(check supabase auth session, else go back to /doctor)

1. Open/Close queue
2. Set Password of the day / Auto generate
3. You can see the list of patients in waiting list / checked in
4. Add/Move order of patients in queue
5. Change time for patients 
6. Current patient
7. Can cancel appointments if they are checked in
   
   Cards:
   1. Number of patients in waitlist
   2. New patients in waitlist
   3. Password of the day (editable)

### `/doctor/settings`
1. Set info
   1. profile picture
   2. email
   3. password
   4. name
   5. degree
   6. speciality
   7. phone
   8. about
   9. services
   10. location
   11. hours
   12. carousel photos

### `/doctor/analytics`


## QUEUE LOGIC

1. Add people to the back of the queue
2. Each person has a check in boolean
3. When doc queries nextPatient() => first person with a true check in (pop)

Join waitlist = join queue at home
Check in = confirmation of being at the clinic
