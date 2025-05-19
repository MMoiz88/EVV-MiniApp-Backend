# EVV-MiniApp-Backend

Prerequisites

- Node.js (v18.20.3 or higher)
  Installation

1. Clone the repository:
   =bash
   Using HTTPS:
   git clone https://github.com/MoizMehdi/EVV-MiniApp-Backend.git

2. Navigate to the backend directory:
   =bash
   cd EVV-MINIAPP-BACKEND

3. Install dependencies:
   =bash
   npm install

4. Create a `.env` file in the EVV-MINIAPP-BACKEND directory and configure the following variables:
   env:
   PORT=4010
   HOST=0.0.0.0
   NODE_ENV=development
   APP_KEY=tLgMf39mjMWczpqRjUl0pyTy7JSGeLuQ
   SESSION_DRIVER=cookie
   CACHE_VIEWS=false

5. Running the Application
   Backend:
   1.Start the development server:
   =bash
   npm run dev

   Data Storage
   DATA_DIR=app/data
