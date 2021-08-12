import { IonContent, IonHeader, IonPage, IonTitle, IonList, IonItem, IonLabel, IonListHeader } from '@ionic/react';
import Navbar from "../components/Navbar";
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import './Programmes.css';

const Programmes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Navbar />
      </IonHeader>
      <IonContent fullscreen>
        <div className = "list-container">
            <IonHeader><IonTitle><h1>List of programmes offered</h1></IonTitle></IonHeader>
            <IonList>
                <IonItem>
                    <IonList>
                        <IonListHeader><h4>BSc. General:</h4></IonListHeader>
                        <IonItem>
                            <IonLabel>Computer Science Major</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Software Engineering Major</IonLabel>
                        </IonItem>
                    </IonList>
                </IonItem>
                <IonItem>
                    <IonListHeader><h4>BSc. Information Technology</h4></IonListHeader>
                </IonItem>
                <IonItem>
                    <IonListHeader><h4>BSc. Computer Studies Option</h4></IonListHeader>
                </IonItem>
                <IonItem>
                    <IonListHeader><h4>BSc. Software Engineering (Mobile Application Technologies)</h4></IonListHeader>
                </IonItem>
                <IonItem>
                    <IonList>
                        <IonListHeader><h4>Minors offered are as follows:</h4></IonListHeader>
                        <IonItem>
                            <IonLabel>Minor in Computer Science</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Minor in Software Engineering</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Minor in Information Technology</IonLabel>
                        </IonItem>
                    </IonList>
                </IonItem>
            </IonList>
        </div>
        
      </IonContent>
      
    </IonPage>
  );
};

export default Programmes;
