# Frontend Web Server  
**Part of the Video Search Engine Project**  

The Frontend Web Server is a React-based web application designed to provide a user-friendly interface for interacting with the Video Search Engine. This frontend enables users to upload, search, and manage media files easily via a modern, responsive UI.


## Key Features  

- **Media Upload**: Supports uploading local media files (videos, images, and more).  
- **Search Interface**: Allows users to perform natural language queries or keyword-based searches.  
- **Interactive Dashboard**: Displays results from backend services (media server, search engine, etc.).  
- **Modular Integration**: Designed to work seamlessly with the backend microservices.  


## Installation  

### Prerequisites  
- **Node.js**: Version `22.0.0`  
- **NPM** or **Yarn**: Installed globally  
- **Backend Services**
    - search service
    - media_server service
- Web browser

### Steps  

1. **Clone the repository**:  
    ```bash  
    git clone https://github.com/iam-VK/frontend_web_app
    cd frontend_web_app  
    ```  

2. **Setup the environment**:  
    Run the provided script to install dependencies and configure the environment.  
    ```bash  
    ./setup.sh  
    ```  

3. **Start the web server**:  
    Use the provided script to run the server:  
    ```bash  
    ./run.sh  
    ```  

4. **Access the application**:  
    Open your browser and navigate to `http://localhost:5000`.  

---

## API Integrations  

The frontend communicates with backend microservices through the following endpoints:  

1. **Media Server**: Handles media uploads and retrievals.  
2. **Search Service**: Fetches search results for user queries.  

## Port Details  

- The application runs on port `5000`.  
- Ensure no other services are using this port before starting the web server.  

## Benefits  

- **Modern UI**: Built with React for responsive, dynamic user interfaces.  
- **Ease of Use**: Simplifies interactions with the Video Search Engine application.
- **Scalable Design**: Easily extendable to include more features.  

---

This frontend web server is an integral part of the Video Search Engine project, ensuring a seamless user experience for managing and searching media files.  