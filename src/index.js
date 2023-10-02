// eslint-disable-next-line @typescript-eslint/no-namespace
var AppNamespace;
(function (AppNamespace) {
    AppNamespace.namespaceName = 'Joao';
    var ClassNamespace = /** @class */ (function () {
        function ClassNamespace(name) {
            this.name = name;
        }
        return ClassNamespace;
    }());
    AppNamespace.ClassNamespace = ClassNamespace;
    AppNamespace.classNamespace = new ClassNamespace('Joao');
    // eslint-disable-next-line @typescript-eslint/no-namespace
    var OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.test = 'TESTE';
    })(OtherNamespace = AppNamespace.OtherNamespace || (AppNamespace.OtherNamespace = {}));
})(AppNamespace || (AppNamespace = {}));
