import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/services/WalletService';
import { AccountState } from 'src/interfaces/AccountState';
// Se declaran los estilos y el hipertexto de componente para su plantilla, haciendo referencia a pago-ethereum.component

@Component({
  selector: 'app-pago-ethereum',
  templateUrl: './pago-ethereum.component.html',
  styleUrls: ['./pago-ethereum.component.css'],
})
export class PagoEthereumComponent implements OnInit {
  // Se inicializan las variables que luego van a ser inicializadas en pago-ethereum.component.html
  depositAmount: number;
  accountState?: AccountState;
  balance?: number;
  loadedBalance = false;

  constructor(private walltetService: WalletService) {
    this.depositAmount = 0.01;
  }

  ngOnInit(): void {
    this.loadedBalance = false;
    this.walltetService
      .init()
      .then((accState) => {
        this.accountState = accState;
        this.updateBalance().then(() => (this.loadedBalance = true));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Se declaro los metodos correspondientes a depositar y updateBalance que son llamadas en pago-ethereum.component.html
  depositar(): void {
    this.accountState?.dBank.deposit(this.depositAmount).then();
  }
  updateBalance(): Promise<any> {
    return (
      this.accountState?.balance().then((balance) => {
        this.balance = balance;
      }) || Promise.resolve()
    );
  }
}
