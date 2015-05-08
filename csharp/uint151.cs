// Represents a uint with a range of 0 - 151. 

struct UIntCustom {
    public uint Value { get; private set; }

    public UIntCustom(uint value) : this() {
        Value = value % 151;
    }

    public static UIntCustom operator +(UIntCustom left, UIntCustom right) {
        return new UIntCustom(left.Value + right.Value);
    }

    public static UIntCustom operator -(UIntCustom left, UIntCustom right) {
        return new UIntCustom(left.Value - right.Value);
    }

    // and so on 

    public static explicit operator UIntCustom (uint c) {
        return new UIntCustom(c);
    }
}