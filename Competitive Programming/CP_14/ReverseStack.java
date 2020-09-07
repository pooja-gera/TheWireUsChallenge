import java.util.*;
public class Main {

	public static void main(String args[]) throws Exception {
		
		Scanner s = new Scanner(System.in);
		int N=s.nextInt();
		Main mainobj = new Main();
		StacksUsingArrays obj = mainobj.new StacksUsingArrays(N);
		StacksUsingArrays helper=mainobj.new StacksUsingArrays(N);
		for(int i=1;i<=N;i++){
			obj.push(s.nextInt());
		}
		obj.reverseStack(obj, helper, 0);
		obj.display();

	}

	private class StacksUsingArrays {
		private int[] data;
		private int tos;

		public static final int DEFAULT_CAPACITY = 10;

		public StacksUsingArrays() throws Exception {
			// TODO Auto-generated constructor stub
			this(DEFAULT_CAPACITY);
		}

		public StacksUsingArrays(int capacity) throws Exception {
			if (capacity <= 0) {
				System.out.println("Invalid Capacity");
			}
			this.data = new int[capacity];
			this.tos = -1;
		}

		public int size() {
			return this.tos + 1;
		}

		public boolean isEmpty() {
			if (this.size() == 0) {
				return true;
			} else {
				return false;
			}
		}

		public void reverseStack(StacksUsingArrays stack, StacksUsingArrays helper, int idx) throws Exception {
						
			if(stack.isEmpty())
			return;
            int p;
			p=stack.pop();
			reverseStack(stack,helper,idx+1);
			helper.push(p);
			if(idx==0)
			{
				while(!helper.isEmpty())
				{
					stack.push(helper.pop());
				}
				
			}
			
		}

		public void push(int item) throws Exception {
			if (this.size() == this.data.length) {
				throw new Exception("Stack is Full");
			}
			this.tos++;
			this.data[this.tos] = item;
		}

		public int pop() throws Exception {
			if (this.size() == 0) {
				throw new Exception("Stack is Empty");
			}
			int retVal = this.data[this.tos];
			this.data[this.tos] = 0;
			this.tos--;
			return retVal;
		}

		public int top() throws Exception {
			if (this.size() == 0) {
				throw new Exception("Stack is Empty");
			}
			int retVal = this.data[this.tos];
			return retVal;
		}

		public void display() throws Exception {
			if (this.size() == 0) {
				throw new Exception("Stack is Empty");
			}
			for (int i = this.tos; i >= 0; i--) {
				System.out.println(this.data[i]);
			}
			
		}

	}

}

