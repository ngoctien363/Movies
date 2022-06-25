import Swal from 'sweetalert2';

export function ALERT_SUCCESS(mes, titles) {
  return Swal.fire({ icon: 'success', title: titles, text: mes });
}

export function ALERT_WARNING(mes, titles) {
  return Swal.fire({ icon: 'warning', title: titles, text: mes });
}

export function ALERT_ERROR(mes, titles) {
  return Swal.fire({ icon: 'error', title: titles, text: mes });
}