package domain;
import java.io.Serializable;

public class Employee implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String name;
    private String cpf;
    private String role;
    private double salary;
    
    public Employee(String name, String cpf, String role, double salary) {
        this.name = name;
        this.cpf = cpf;
        this.role = role;
        this.salary = salary;
    }
    
    public String getName() {
        return name;
    }
    
    public String getCpf() {
        return cpf;
    }
    
    public String getRole() {
        return role;
    }
    
    public double getSalary() {
        return salary;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public void setRole(String role) {
        this.role = role;
    }
    
    public void setSalary(double salary) {
        this.salary = salary;
    }
    
    public String toString() {
        return "Nome: " + getName() + "\nCPF: " + getCpf() + "\nCargo: " + getRole() + "\nSalario: " + getSalary();
    }

}
