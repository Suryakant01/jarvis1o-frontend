# 💬 Personal AI FAQ Chatbot - Frontend (Jarvis-1o)

This repository contains the frontend application for a personalised AI-powered FAQ chatbot. It provides an interactive chat interface that communicates with a backend service (from the companion `backend/` directory) to retrieve and display information about a specific individual.

## ✨ Features

*   **Interactive Chat Interface:** A clean, user-friendly UI for asking questions and viewing chatbot responses.
*   **Dynamic Message Display:** Displays both user and bot messages in a conversational flow.
*   **Real-time Typing Indicator:** Enhances user experience by showing a visual cue when the bot is processing a response.
*   **Auto-Scrolling:** Automatically scrolls to the latest message, keeping the conversation in view.
*   **Responsive Design:** Styled with CSS to provide a good experience on various screen sizes.
*   **Dark Mode Styling:** Features a modern dark theme for comfortable viewing.
*   **Backend Integration:** Seamlessly sends user questions to a backend API and displays the AI-generated answers.

## 🚀 Technologies Used

This frontend application is built with modern web technologies:

*   **React.js:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool that provides a lightning-fast development experience for React applications.
*   **CSS:** For styling the chat interface, including a dark theme.
*   **ESLint:** For code quality and consistency.

## ⚙️ Setup and Installation

Follow these steps to get the frontend running on your local machine.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (comes with Node.js)
*   The **backend service** of this project must be running at `http://localhost:5001`. Refer to its `README.md` for setup instructions.

### 1. Navigate to the `frontend` directory

```bash
cd frontend
```

### 2. Install Dependencies

Install the required Node.js packages for the frontend:

```bash
npm install
```

## 5. Running the Application

To start the frontend development server:

```bash
npm run dev
```

You should see output similar to this:

```
  VITE v7.0.4  ready in 150 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open your web browser and navigate to the `Local` address (e.g., `http://localhost:5173/`).

## 💬 Usage

Once the frontend is running (and the backend is also active), you can interact with the chatbot:

1.  Open your browser to the local frontend URL (e.g., `http://localhost:5173/`).
2.  Type your question into the input field at the bottom of the chat window.
3.  Press `Enter` or click the "Send" button.
4.  The bot's response will appear in the chat history.

The chatbot is designed to answer questions about Suryakant Yadav's personal and professional profile, based on the data in the `backend/data/faqs.json` file.

## 💡 Future Enhancements

*   **Offline Support:** Implement service workers for basic offline capabilities.
*   **Accessibility Improvements:** Enhance keyboard navigation, ARIA attributes, and color contrast.
*   **Theming Options:** Allow users to switch between light and dark themes.
*   **Input Validation & Feedback:** Provide more immediate visual feedback for empty inputs or network errors.
*   **Performance Optimizations:** Lazy loading components, virtualization for long chat histories.

## 🤝 Contributing

Feel free to fork this repository, open issues, or submit pull requests.

## 📄 License

This project is licensed under the ISC License.

---


**Author:** TheMyth
