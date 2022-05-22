import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 })
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Life Cyle Hook with spontaneous response.');
  }
  tinyAlert() {
    Swal.fire('Hey there!');
  }
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }
 
  alertConfirmation() {
    Swal.fire({
      title:'Você tem uma promoção. % de descontos !!!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Pagar Agora',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}