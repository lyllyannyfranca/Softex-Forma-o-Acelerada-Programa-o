import java.util.Scanner;

public class ExempleException {

	public static void main(String[] args) {
		System.out.println("=== CALCULADORA SIMPLES ===");
		try {
			Scanner in = new Scanner(System.in);
			
			System.out.print("Informe o primeiro número a ser calculado: ");
			int firstNumber = in.nextInt();
			
			System.out.print("Informe o segundo número a ser calculado: ");
			int secondNumber = in.nextInt();
			
			System.out.println("Tipos de operação: ");
			System.out.println("1 - Soma");
			System.out.println("2 - Subtração");
			System.out.println("3 - Multiplicação");
			System.out.println("4 - Divisão");
			System.out.print("Digite a opção escolhida: ");
			int option = in.nextInt();
			
			switch (option) {
			case 1:
				System.out.printf("Resultado: %d%n", (firstNumber + secondNumber));
				break;
			case 2:
				System.out.printf("Resultado: %d%n", (firstNumber - secondNumber));
				break;
			case 3:
				System.out.printf("Resultado: %d%n", (firstNumber * secondNumber));
				break;
			case 4:
				System.out.printf("Resultado: %d%n", (firstNumber / secondNumber));
				break;
			default:
				System.out.println("Opção invalida!");
			}
			in.close();

		} catch(ArithmeticException e) {
			System.out.println(e.getMessage());
		} 

	}

}
