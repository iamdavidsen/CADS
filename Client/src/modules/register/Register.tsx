import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent, IonInput,
} from '@ionic/react';

const Register: React.FunctionComponent = () => {
  return (
    <>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Register</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonInput value="custom"/>
            <IonInput value="custom"/>
            <IonInput onChange={(v) => console.log(v)} value={"adsa"}/>
            <IonButton>Register</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Register;
