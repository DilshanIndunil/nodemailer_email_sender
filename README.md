# Nodemailer Email Sender

This is a simple Node.js project that demonstrates how to send emails using the [Nodemailer](https://nodemailer.com/) package and Gmail's SMTP service. It includes support for plain text, HTML content, and file attachments, making it ideal for learning or small email-sending applications.

## Features
- Send plain text and HTML emails.
- Attach files such as PDFs and images.
- Configured to work with Gmail's SMTP service.
- Demonstrates basic email sending functionality using Nodemailer.

## Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- A Gmail account (for SMTP setup)
- A generated [Gmail App Password](https://support.google.com/accounts/answer/185833?hl=en) (if using Gmail with 2-step verification enabled)

## Setup and Installation

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/DilshanIndunil/nodemailer-email-sender.git
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies:

```bash
cd nodemailer-email-sender
npm install
```
### 3. Configure Your .env File

Create a .env file in the root of the project directory to store sensitive data such as your Gmail address and App Password. Example:

```bash
USER=your-email@gmail.com
APP_PASSWORD=your-app-password
```

### 4. Run the Project

Once the .env file is configured, you can run the project using:

```bash
node index.js
```

### File Structure

```bash
nodemailer-email-sender/
├── index.js          # Main script to send email
├── .gitignore        # Ignore .env and other sensitive files
├── .env              # Store sensitive credentials (not pushed to GitHub)
├── package.json      # Project dependencies and metadata
└── README.md         # This README file
```

### Nodes

Make sure you have enabled access for less secure apps in your Gmail account or use an App Password if you have two-factor authentication enabled.
The .env file is used to securely store sensitive credentials and is not pushed to GitHub (it's added to .gitignore).

### License

This project is open-source and available under the MIT License.

```bash

---

### **Explanation:**
1. **Project Overview**: Explains the purpose of the project and the features.
2. **Prerequisites**: Lists what the user needs to have installed before using the project.
3. **Setup**: Instructions for cloning the repository, installing dependencies, configuring the `.env` file, and running the project.
4. **File Structure**: Shows the organization of the project files.
5. **Notes**: Reminds users to keep sensitive data safe by using `.env` and adding it to `.gitignore`.
6. **License**:---.

---

```
