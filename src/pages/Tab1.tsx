import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <h4>Quiz App</h4>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <div className='idk'>
        <div className='box'>
        <h1>Sign in to your account</h1>
        <p>Username<input placeholder='Username' type="text" className='Username-input' /></p>
        <p>Password
        <input placeholder='Password' type="text" className='Password-input'  />
        </p>
        <IonButton className='mybutton'>Submit</IonButton>
        <p>Don't Have a account?<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Create An Account</a></p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Reset Your Password!</a>        
        </div>
       </div>
       {/* here put on the divs and all that */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
