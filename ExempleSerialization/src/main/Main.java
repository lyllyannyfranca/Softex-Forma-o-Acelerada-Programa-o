package main;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Scanner;

import domain.Employee;

public class Main {
	
	public static void recordBinaryArchive(ArrayList<Object> arr, String archiveName) {
	    File archive = new File(archiveName);
	   
	    try {
	        archive.delete();
	        archive.createNewFile();
	        
	        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(archive));
	        oos.writeObject(arr);
	        oos.close();
	        
	    } catch (IOException e) {
	        System.out.println("Erro: " + e.getMessage());
	    }
	    
	}
	
	public static ArrayList<Object> readBinaryArchive(String archiveName) {
	    ArrayList<Object> arr = new ArrayList<Object>();
	    try {
	        File archive = new File(archiveName);
	        
	        if (archive.exists()) {
	            ObjectInputStream ois = new ObjectInputStream(new FileInputStream(archive));
	            
	            while (ois.read() != -1) 
	            	arr.add((Employee)ois.readObject());

	            ois.close();
	        }
	       
	    } catch (IOException | ClassNotFoundException e) {
	        System.out.println("Erro.1: " + e.getMessage());
	    } 
	    
        return arr;
	}
	
	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		int option;
	    String name = "", cpf = "", role = "";
	    double salary = 0d;
        ArrayList<Object> list = readBinaryArchive("cadastro.ser");
	    
        do {
        	System.out.println("=== Menu ===");
    		System.out.println("1 - Cadastro de funcionario");
    		System.out.println("2 - Listar funcionarios");
    		System.out.println("0 - Sair");
    		System.out.print("Informe a opção desejada: ");
        	option = in.nextInt();
        	in.nextLine();
        	
        	try {
        		
        		switch (option) {
        		case 1:
        			do {
        				System.out.println();
        				System.out.println("=== CADASTRO DE FUNCIONARIO ===");
        				System.out.print("Informe o nome: ");
        				name = in.nextLine();
        				System.out.print("Infore o cpf: ");
        				cpf = in.nextLine();
        				System.out.print("Informe o cargo: ");
        				role = in.nextLine();
        				System.out.print("Informe o valor do salário: ");
        				salary = in.nextDouble();
        				
        				list.add(new Employee(name, cpf, role, salary));
        				recordBinaryArchive(list, "cadastro.ser");
        				
        				do {
        					try {
        						System.out.println("Deseja continuar?");
        						System.out.println("1 - Sim");
        						System.out.println("2 - Não");
        						System.out.print("Informe a opção: ");
        						option = in.nextInt();
        						
        						if (option == 2) {
        							System.out.println("Cadastro realizado com sucesso!" + System.lineSeparator());
        							break;
        						} else if (option == 1) {
        							in.nextLine();
        							break;
        						} else throw new IllegalArgumentException(option 
        								+ ": Opção inválida!" 
        								+ System.lineSeparator() 
        								+ "Tente novamente!");
        						
        					} catch (IllegalArgumentException e) {
        						System.out.println(e.getMessage());
        					}
        					
        				} while (true);
        				
        			} while (option != 2);
        			break;
        		case 2:	
        			System.out.println();
        			System.out.println("=== Listagem de funcionarios ===");
        			
        			if (list.size() == 0) 
        				System.out.println("Sem funcionários cadastrados no momento.");
        			
        			System.out.println();
        			for (Object item : list) {
        				System.out.println("Nome: " + ((Employee)item).getName());
        				System.out.println("CPF: " +((Employee)item).getCpf());
        				System.out.println("Cargo: " +((Employee)item).getRole());
        				System.out.printf("Salário: R$ %,.2f%n%n", ((Employee)item).getSalary());
        			}
        			
        			break;
        		case 0:
        			System.out.println();
        			System.out.println("=== Fim do programa ===");
        			
        			File archive = new File("cadastro.ser");
        			
        			if (archive.exists()) 
        				archive.delete();        				
        			
        			System.exit(0);
        			
        		default:
        			throw new IllegalArgumentException(option 
        					+ ": Opção inválida!" 
        					+ System.lineSeparator() 
        					+ "Tente novamente!");
        		}
        		
        	} catch (IllegalArgumentException e) {
        		System.out.println(e.getMessage());
        	}
        	
        } while (option != 0);
        in.close();
	}
}
