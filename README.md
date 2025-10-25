
**Project Name ** : " ToyTopia "

**Purpose ** : "An online marketplace or e-commerce platform for toys, featuring user authentication (login, register, profile, password reset) and the display of toy listings."

**Live URL **:https://kdstoystore.netlify.app/

**Database	**: Firebase is used for authentication and likely for data storage, based on the firebase.js configuration and the authentication functions.


**Key Features**
**Authentication and User Management (Firebase):**
Registration: Users can create an account with email, password, name, and an optional photo URL. Includes basic password validation (at least 6 characters, 1 uppercase, 1 lowercase).
Login: Users can sign in with email/password.
Google Login/Sign-up: Users can authenticate via Google.
Logout: Securely log the user out and redirect to the home page.
Profile Management: Authenticated users can view their email and update their display name and photo URL.
Password Reset: A "Forgot Password" function allows users to receive a password reset email.
Navigation and Layout (React Router):
A persistent Navbar with navigation links for Home, Profile, and Contact.
Conditional rendering in the Navbar for logged-in (user) and logged-out (Login button) states.
Core Content & Display:
Home Page: Features a hero Slider (component not provided), displays a list of 6 popular toys from a local toys.json file, and includes "Fun sections" like "Local Seller Spotlight" and "Gift Ideas," plus a "Recent Photoshoots" image carousel.
Toy Data: Uses a local toys.json file with toy details (name, seller, price, rating, quantity, etc.).
User Interface & Experience:
Uses Tailwind CSS utility classes (e.g., bg-gray-700, text-pink-700, shadow-lg, rounded-full) for styling.
Utilizes a modal/alert library, SweetAlert2 (Swal), for user feedback (success/error messages on login, register, profile update, etc.).
Uses the AOS (Animate On Scroll) library for animations on the Home page.
The Contact page includes a form with a Google Map iframe placeholder and contact details.


**Package,Purpose in the Project**
react-router-dom,"Client-side routing for navigating between pages (e.g., Link, NavLink, useNavigate, useLocation)."
firebase,"Handling user authentication (login, registration, Google sign-in, password reset) and connecting to the backend."
sweetalert2 (Swal),"Displaying engaging, customizable modal/pop-up alerts for success and error messages."
react-icons/fc,Provides the Google icon (FcGoogle) used for the social login buttons.
lucide-react,"Provides icons like the eye/eye-off (Eye, EyeOff) for the password visibility toggle in the registration form."
aos,"Animate On Scroll library for triggering animations on elements as they come into the viewport, used on the Home page."
