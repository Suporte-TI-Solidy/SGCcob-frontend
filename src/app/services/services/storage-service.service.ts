import { Injectable } from '@angular/core';
import { LocalUser } from 'src/app/class/local_user';
import { STORAGE_KEYS } from 'src/app/configs/storage.keys';


@Injectable({
    providedIn:'root'
    })
export class storageService{
        
    
        getLocaluser():any{
          let usr = localStorage.getItem(STORAGE_KEYS.localUser)

          if(usr == null){
            return null;
          }else{
              return JSON.parse(usr)
          }

            
        }
    
    
        setLocalUser(obj:any){
            console.log("my set localUser",obj)
            if(obj == null){
                localStorage.removeItem(STORAGE_KEYS.localUser)
            }else{
                localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj))
            }
        }
    }

