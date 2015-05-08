// Java objects are eligible for garbage collection once you no longer has a strong reference 
// to the object. This is not dependent on if you "use" the object or not.

// in this Scala example, tempFile is not eligible for garbage collection, and therefore 
// finalization, until foo() is is no longer used. It's possible that objects that use 
// members from tempFile may use it, and keep it ineligible longer than the last use 
// inside foo(). 

def foo() {
    val tempFile = TemporaryFile(new File("/tmp/foo"))

    val inputStream = new FileInputStream(tempFile.file) // last use
    try {
        println(inputStream.read())
    } finally {
        inputStream.close()
    }
}