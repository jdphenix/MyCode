// Flips bits on an integer while handling the special case that Java's
// integral types are all signed

int original = 1;
long flipped = ~original & 0x00000000ffffffffL;
System.out.println(flipped); 