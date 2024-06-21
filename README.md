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

### `/doctor/[id]/dashboard`

(check supabase auth session, else go back to /doctor)

1. Open/Close queue
2. You can see the list of patients waiting (checked in)
3. Can manipulate the order of the patients / add-subtract

### `/doctor/[id]/settings`
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

### `/doctor/[id]/analytics`


## QUEUE LOGIC

1. Add people to the back of the queue
2. Each person has a check in boolean
3. When doc queries nextPatient() => first person with a true check in (pop)

Join waitlist = join queue at home
Check in = confirmation of being at the clinic
