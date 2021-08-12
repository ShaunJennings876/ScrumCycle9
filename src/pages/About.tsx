import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonImg } from '@ionic/react';
import './About.css';
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>
      <IonContent>
        <div className="flex-center">
            <IonCard color = "light">
                <IonCardHeader><IonCardTitle>About Me</IonCardTitle></IonCardHeader>
                <img src="assets/Shaun.jpg" alt="" className="card-image"/>
                
                <IonCardContent>
                    <IonCardSubtitle>Name</IonCardSubtitle>
                    <IonCardHeader>Shaun Jennings</IonCardHeader>
                    <IonCardSubtitle>Description</IonCardSubtitle>
                    <IonCardHeader>I am a 21 year old Computer Science major with a keen interest in Data Science and Business Intellegence. My hobbies include playing games, making games, watching movies and weightlifting.</IonCardHeader>
                </IonCardContent>
            </IonCard>
        </div>
        

      </IonContent>
    </IonPage>
  );
};

export default About;
