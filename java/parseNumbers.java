// Demonstrates one way to parse valid BigDecimal values out of a string. 

public class BigDecimalParser {  
    private static Object lock = new Object();
    private static final Pattern BIG_DECIMAL_MATCHER;

    static {
        synchronized (lock) {
            BIG_DECIMAL_MATCHER = Pattern.compile("-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)"); 
            // credit to stackoverflow.com/questions/14343551
        }
    }

    /**
     * Attempts to force a given String value to a valid BigDecimal. If there are 
     * multiple valid BigDecimal values, only the first is returned.
     */
    static BigDecimal forceBigDecimal(String value) { 
        Matcher moneyMatcher = BIG_DECIMAL_MATCHER.matcher(value);

        while (moneyMatcher.find()) {
            return new BigDecimal(moneyMatcher.group());
        }
        throw new NumberFormatException(
            String.format("Valid number not found in value: %s", value));
    }
}

// example usage

List<String> moneyValues = new ArrayList<String>() {{
    add("$42.35"); add("Fee: $10.25"); add("?1200");
    add("obviously not valid input"); 
    add("not too 42 sure . 12about this one"); 
    add("or this $..3"); 
    add("$42.35 $84.50");
}};

for (String value : moneyValues) {
    try {   
        BigDecimal parsed = BigDecimalParser.forceBigDecimal(value); 
        System.out.println(parsed);
    } catch (NumberFormatException ex) { 
        ex.printStackTrace();
        continue;
    }
}