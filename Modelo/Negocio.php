<?phpclass Negocio extends Conexion{    private $objConexion;    public function __construct()    {        $this->objConexion = new Conexion();        $this->objConexion = $this->objConexion->system_connect();    }}