# 🐄 CattleCare

**CattleCare** is a web-based cattle health management prototype designed to help farmers monitor cattle health, record symptoms, access preliminary AI-assisted health screening, receive veterinary feedback, and manage veterinary appointments.

> **Project status: Prototype / MVP**

## 📌 About the Project

CattleCare was developed as a prototype to demonstrate how technology can improve the way cattle health information is recorded, monitored, and communicated between farmers and veterinarians.

The system provides separate workflows for **farmers** and **veterinary users**, allowing health information to move from the farmer through preliminary screening and ultimately to veterinary review.

## ✨ Key Features

### 👨‍🌾 Farmer Features

* Farmer login and registration
* Farmer dashboard
* Register and manage cattle
* Record cattle symptoms
* AI-assisted preliminary health screening
* Capture cattle images using the device camera
* View veterinary diagnoses
* Book veterinary appointments
* View appointment status
* Access support

### 👨‍⚕️ Veterinary Features

* Veterinary login
* Veterinary dashboard
* View reported cattle health cases
* Review farmer-reported symptoms
* Review AI preliminary assessments
* Provide veterinary diagnoses and recommendations
* Manage appointments
* View registered cattle
* View health reports
* Veterinary messaging and support features

### 🤖 AI Health Check

The prototype includes an **AI-assisted preliminary health screening feature**.

Farmers can:

1. Select a cattle record.
2. Capture an image using the device camera.
3. Select observed symptoms.
4. Add additional information about the cattle.
5. Submit the health check.
6. Receive a preliminary health assessment.
7. Have the case made available for veterinary review.

The current prototype uses **rule-based assessment logic** rather than a trained machine-learning disease-diagnosis model.

The AI assessment is intended to support early identification and prioritisation of potential health concerns. It is **not a replacement for professional veterinary diagnosis**.

## 🔄 System Workflow

```text
Farmer Login
     ↓
Farmer Dashboard
     ↓
Select Cattle
     ↓
AI Health Check
     ├── Capture Image
     ├── Select Symptoms
     └── Add Description
     ↓
AI Preliminary Assessment
     ↓
Veterinary Dashboard
     ↓
Veterinarian Reviews Case
     ↓
Final Veterinary Diagnosis
     ↓
Farmer Views Diagnosis
     ↓
Appointments / Follow-up
```

## 🛠️ Technologies Used

* **HTML5** — Web page structure
* **CSS3** — Interface design and styling
* **JavaScript** — Application logic and interaction
* **Browser LocalStorage** — Prototype data persistence
* **HTML5 Camera API** — Cattle image capture
* **Boxicons** — Interface icons

## 💾 Data Storage

The current prototype uses the browser's **LocalStorage** to store information such as:

* Farmer account information
* Registered cattle
* Symptoms
* AI health assessments
* Veterinary diagnoses
* Appointments
* Application preferences

LocalStorage was selected because it provides a simple way to demonstrate data persistence during prototype development without requiring a production database.

For a production system, this will be replaced with a proper backend and database.

## 🔐 Authentication

The current authentication system is designed for **prototype demonstration purposes**.

The production version will require:

* Secure server-side authentication
* Password hashing
* Role-based access control
* Secure sessions or authentication tokens
* Server-side validation
* HTTPS
* Proper user and permission management

## ⚠️ Prototype Disclaimer

CattleCare is currently a **software prototype** and should not be used as a substitute for professional veterinary care.

The AI Health Check feature provides preliminary, rule-based screening and has **not been clinically validated** as a veterinary diagnostic system.

The prototype uses browser-based LocalStorage and is therefore not suitable for storing sensitive production data.

## 🚀 Future Development

The next stage of CattleCare will focus on turning the prototype into a full production system.

Planned improvements include:

* Backend API
* Centralised database
* Secure authentication
* Role-based access control
* Farmer and veterinarian accounts
* Real-time communication
* Appointment notifications
* Improved cattle health records
* Veterinary reporting
* Cloud-based image storage
* A trained and properly evaluated AI/ML health assessment model
* Computer vision for cattle image analysis
* AI model evaluation and validation
* Automated health alerts
* Production deployment

## 📈 Project Development Roadmap

### Phase 1 — Prototype

* Farmer interface
* Veterinary interface
* Cattle management
* Symptom recording
* Appointments
* AI-assisted preliminary screening
* LocalStorage data sharing

### Phase 2 — Backend

* Backend API
* Database
* User accounts
* Secure authentication
* Role-based permissions

### Phase 3 — AI Development

* Veterinary-labelled dataset
* Data preprocessing
* Model development
* Model evaluation
* Validation
* Improved health-risk prediction

### Phase 4 — Production MVP

* Connect frontend to backend
* Deploy database and API
* Secure authentication
* Deploy AI services
* Notifications
* Testing
* Production deployment

## 🎓 Project Purpose

The CattleCare prototype demonstrates how a digital platform can connect **farmers, cattle health information, preliminary AI-assisted screening, and veterinary services** within one system.

The goal is to support earlier reporting of potential health concerns and improve communication between farmers and veterinary professionals.

## 📂 Project Structure

```text
CattleCare/
│
├── index.html
├── main.html
├── my-cattle.html
├── add-symptoms.html
├── ai-health-check.html
├── diagnosis.html
├── appointments.html
├── support.html
│
├── vet-dashboard.html
├── vet-appointments.html
├── vet-health-cases.html
├── vet-cattle.html
├── vet-messages.html
├── vet-reports.html
└── vet-support.html
│
├── styles.css
├── script.js
└── Innovations-in-Livestock-Comfort-Control-1.webp
```

## 📌 Current Status

**CattleCare v0.1 — Presentation Prototype**

The current version demonstrates the main farmer and veterinary workflows and provides the foundation for future backend, database, authentication, and AI development.

---

**CattleCare** 🐄
*Supporting better cattle health management through technology.*
