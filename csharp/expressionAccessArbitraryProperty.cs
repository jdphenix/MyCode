// Demonstrates how to access an arbitrary property from an object. 

static class Gen<TModel, TProp> {
    public static Func<TModel, TProp> SelectorExpr(string propertyName) {
        var pExpr = Expression.Parameter(typeof (TModel));
        var mExpr = Expression.Property(pExpr, propertyName);
        var lExpr = Expression.Lambda<Func<TModel, TProp>>(mExpr, pExpr);
        return lExpr.Compile();
    }
}

// And then to use, 

var results = objTemp.Select(Gen<Obj1, string>.SelectorExpr(propName));