// Handles using the Expression API to access a type's indexer. 
// Note: DOES NOT handle case in which indexer property name
// was changed with System.Runtime.CompilerServices.IndexerNameAttribute

var dic = new Dictionary<string, object> {
    {"KeyName", 1}
};
var parameterExpression = Expression.Parameter(typeof (IDictionary<string, object>), "d");
var constant = Expression.Constant("KeyName");
var propertyGetter = Expression.Property(parameterExpression, "Item", constant);

var expr = Expression.Lambda<Func<IDictionary<string, object>, object>>(propertyGetter, parameterExpression).Compile();

Console.WriteLine(expr(dic));