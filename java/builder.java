// Demonstrates the static builder pattern

class Foo {
    private final Object objectToSet;

    private Foo(Foo.Builder builder) { 
        objectToSet = builder.getObjectToSet();
    }

    public static class Builder {
        private Object objectToSet; 

        public Builder() { } 

        private Object getObjectToSet() {
            return objectToSet;
        }

        public Builder objectToSet(Object objectToSet) { 
            this.objectToSet = objectToSet; 
            return this; 
        }

        public Foo build() { 
            return new Foo(this);
        }
    }
}