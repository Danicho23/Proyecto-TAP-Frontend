export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './categoriaController.service';
import { CategoriaControllerService } from './categoriaController.service';
export * from './empresaController.service';
import { EmpresaControllerService } from './empresaController.service';
export * from './ordenController.service';
import { OrdenControllerService } from './ordenController.service';
export * from './personaController.service';
import { PersonaControllerService } from './personaController.service';
export * from './productoController.service';
import { ProductoControllerService } from './productoController.service';
export * from './provedorController.service';
import { ProvedorControllerService } from './provedorController.service';
export * from './usuarioController.service';
import { UsuarioControllerService } from './usuarioController.service';
export const APIS = [BasicErrorControllerService, CategoriaControllerService, EmpresaControllerService, OrdenControllerService, PersonaControllerService, ProductoControllerService, ProvedorControllerService, UsuarioControllerService];
