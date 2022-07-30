import java.util.Scanner;

public class ExempleException {

	public static void main(String[] args) {
		System.out.println("=== CALCULADORA SIMPLES ===");
		try {
			Scanner in = new Scanner(System.in);
			
			System.out.print("Informe o primeiro n�mero a ser calculado: ");
			int firstNumber = in.nextInt();
			
			System.out.print("Informe o segundo n�mero a ser calculado: ");
			int secondNumber = in.nextInt();
			
			System.out.println("Tipos de opera��o: ");
			System.out.println("1 - Soma");
			System.out.println("2 - Subtra��o");
			System.out.println("3 - Multiplica��o");
			System.out.println("4 - Divis�o");
			System.out.print("Digite a op��o escolhida: ");
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
				System.out.println("Op��o invalida!");
			}
			in.close();

		} catch(ArithmeticException e) {
			System.out.println(e.getMessage());
		} 

	}

}
