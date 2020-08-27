import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { DetailTest } from './detail-test';
 
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
testInfoList: AngularFirestoreCollection<DetailTest>;
  constructor(public db: AngularFirestore) {
    this.testInfoList=db.collection('infoTestList');
  }
  updateinfoTest(key:string, value:any):Promise<void>{
    return this.testInfoList.doc(key).update(value);
  }
  deleteinfoTest(key:string):Promise<void>{
    return this.testInfoList.doc(key).delete();
  }
  
  getinfoTest(){
    return this.db.collection('infoTestList');
  }
  getInfoTestList(): AngularFirestoreCollection<DetailTest> {
    return this.testInfoList;
  }

  createinfoTest(infotest: DetailTest){
   this.testInfoList.add({...infotest});    
  }
  deleteAll() {
    this.testInfoList.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}
