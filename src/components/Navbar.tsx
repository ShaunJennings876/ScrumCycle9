import {IonButtons, IonButton, IonToolbar, IonTitle} from '@ionic/react';

const Navbar: React.FC = () => {
  return (
    <IonToolbar>
        <IonTitle>Shaun's Ionic App</IonTitle>
        <IonButtons slot="end">
          <IonButton routerLink = {"/home"}>Home</IonButton>
          <IonButton routerLink = {"/about"}>About</IonButton>
          <IonButton routerLink = {"/programmes"}>Programmes</IonButton>
        </IonButtons>
    </IonToolbar>
  );
};

export default Navbar;
