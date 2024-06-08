### Patients

1. See estimated wait time/# of people in line (before they sign up or at home)
2. Enter name and phone number to join the queue
3. See YOUR estimated wait time/# of people in line before you (after they sign up)
4. Be able to cancel their appointment / remove them from the queue
5. Get notification when theyre next in line / it is their turn (twilio integration or in-app notification)
6. Feedback on the process

### Doctors/Admins

1. Open/Close queue
   1. its like opening and closing the clinic - This way nobody can sign up off-hours - also save money on websockets
2. Can rearrange patients
3. decide whos next
4. Add/delete patients

### TV

1. Shows the queue with initials of the patients (privacy)
2. Displays the estimated wait time for people who haven't signed up yet
3.

### `/clinic`

1. shows cards for the two clinics
2. address, phone number, speciality

### `/clinic/[id]/`

1. Basic info and current opening status
2. estimated wait time
3. Button to reserve a spot (please get to the clinic in 1 hour)

### `clinic/[id]/checkin/` (WEBSITE) 
- SOMEWHAT DONE

#### `clinic/id/checkin?atClinic=True` (QR CODE)

1. Form to enter Name and Phone Number

### `clinic/[id]/patient/[UUID]/`

1. Keep track of your ETA
2. Button "I am here" and it will solidify your place in the line
3. Cancel my appointment
4. Button that opens the address in google maps
5. A little timer to warn them to check in

### `clinic/[id]/queue`

1. Shows queue (ex. Ninad K.)
2. Notifies next person when thier turn comes up
3. ETA for walk-ins
4. Check in reminder

### `doctor/[id]/queue`

1. Open/Close queue
2. You can see the list of patients waiting (checked in)
3. Can manipulate the order of the patients / add-subtract
