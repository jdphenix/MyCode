// Demonstrates how to use BigDecimal to produce formatted 
// output with BigDecimal and trailing non-significant zeroes
// removed. 

BigDecimal number = new BigDecimal("10.2270");  
System.out.println(number.stripTrailingZeros().toPlainString());

// will output 10.227

// This method takes a `Collection<String>` as input, and returns the same
// as formatted numbers, as above. 

public static Collection<String> stripZeros(Collection<String> numbers) {
    if (numbers == null) { 
        throw new NullPointerException("numbers is null");
    }

    ArrayList<String> value = new ArrayList<>(); 

    for (String number : numbers) { 
        value.add(new BigDecimal(number).stripTrailingZeros().toPlainString());
    }

    return Collections.unmodifiableList(value);
}