import {Component} from '@angular/core';
import {ContentModule} from './content/content.module';

@Component({
  selector: 'app-content-projection',
  imports: [ContentModule],
  template: `
    <div class="component-container">
      <h2>Proyección de Contenido con ng-content</h2>

      <section class="example-card">
        <h3>1. Proyección Simple</h3>
        <div class="alert alert-info">
          La proyección simple permite insertar cualquier contenido HTML dentro del componente hijo.
          Todo el contenido se proyecta en una única ubicación usando ng-content.
        </div>
        <div class="content-group">
          <app-card>
            <div class="profile-card">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" class="avatar">
              <h4>Felix Developer</h4>
              <span class="badge">Senior Frontend</span>
              <div class="skills">
                <span class="skill">Angular</span>
                <span class="skill">TypeScript</span>
                <span class="skill">React</span>
              </div>
              <button class="profile-button">Ver Perfil</button>
            </div>
          </app-card>
        </div>
      </section>

      <section class="example-card">
        <h3>2. Proyección Multi-slot</h3>
        <div class="alert alert-info">
          La proyección multi-slot permite distribuir el contenido en diferentes ubicaciones
          del componente hijo usando selectores específicos.
        </div>
        <div class="content-group">
          <app-panel>
            <header>
              <h4>📊 Dashboard de Ventas</h4>
            </header>
            <div class="body">
              <div class="dashboard-stats">
                <div class="stat-card">
                  <span class="stat-value">$45,678</span>
                  <span class="stat-label">Ventas Totales</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value">324</span>
                  <span class="stat-label">Nuevos Clientes</span>
                </div>
              </div>
            </div>
            <footer>
              <button class="secondary">Exportar PDF</button>
              <button class="primary">Ver Detalles</button>
            </footer>
          </app-panel>
        </div>
      </section>

      <section class="example-card">
        <h3>3. Proyección Condicional</h3>
        <div class="alert alert-info">
          La proyección condicional permite mostrar u ocultar contenido
          basado en condiciones o interacciones del usuario.
        </div>
        <div class="content-group">
          <app-accordion>
            <header>
              <span class="accordion-title">📱 Características del Producto</span>
            </header>
            <div class="content">
              <ul class="feature-list">
                <li>✨ Diseño Responsive</li>
                <li>🚀 Alto Rendimiento</li>
                <li>🔒 Seguridad Avanzada</li>
                <li>💫 Actualizaciones Automáticas</li>
              </ul>
            </div>
          </app-accordion>
          <app-accordion>
            <header>
              <span class="accordion-title">💰 Planes y Precios</span>
            </header>
            <div class="content">
              <div class="pricing-grid">
                <div class="price-card">
                  <h5>Basic</h5>
                  <p class="price">$9.99/mes</p>
                </div>
                <div class="price-card">
                  <h5>Pro</h5>
                  <p class="price">$19.99/mes</p>
                </div>
              </div>
            </div>
          </app-accordion>
        </div>
      </section>
      <section class="example-card">
        <h3>4. Proyección con Tabs</h3>
        <div class="alert alert-info">
          Los tabs permiten organizar contenido en pestañas, mostrando
          solo una sección a la vez según la selección del usuario.
        </div>
        <div class="content-group">
          <app-tab>
            <div class="tab-content" data-tab="1">
              <div class="tab-section">
                <h4>📝 Información del Proyecto</h4>
                <div class="project-info">
                  <div class="info-card">
                    <h5>Descripción</h5>
                    <p>Este proyecto demuestra conceptos avanzados de Angular, incluyendo
                      proyección de contenido, gestión de estado y patrones de diseño modernos.</p>
                  </div>
                  <div class="tech-stack">
                    <h5>Stack Tecnológico</h5>
                    <ul class="tech-list">
                      <li>🅰️ Angular 17</li>
                      <li>📘 TypeScript 5</li>
                      <li>🔄 RxJS</li>
                      <li>🎨 CSS Moderno</li>
                      <li>📦 Node.js</li>
                    </ul>
                  </div>
                  <div class="version-info">
                    <h5>Versión</h5>
                    <span class="version">v2.1.0</span>
                    <p class="update-date">Última actualización: 15 Mar 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content" data-tab="2">
              <div class="tab-section">
                <h4>⚙️ Configuración del Sistema</h4>
                <div class="settings-grid">
                  <div class="settings-group">
                    <h5>Apariencia</h5>
                    <div class="config-item">
                      <label>Modo Oscuro</label>
                      <input type="checkbox">
                    </div>
                    <div class="config-item">
                      <label>Tema</label>
                      <select>
                        <option>Default</option>
                        <option>Modern</option>
                        <option>Classic</option>
                      </select>
                    </div>
                  </div>
                  <div class="settings-group">
                    <h5>Notificaciones</h5>
                    <div class="config-item">
                      <label>Notificaciones Push</label>
                      <input type="checkbox" checked>
                    </div>
                    <div class="config-item">
                      <label>Notificaciones Email</label>
                      <input type="checkbox" checked>
                    </div>
                  </div>
                  <div class="settings-group">
                    <h5>Privacidad</h5>
                    <div class="config-item">
                      <label>Perfil Público</label>
                      <input type="checkbox">
                    </div>
                    <div class="config-item">
                      <label>Compartir Estadísticas</label>
                      <input type="checkbox">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content" data-tab="3">
              <div class="tab-section">
                <h4>📊 Estadísticas del Proyecto</h4>
                <div class="stats-dashboard">
                  <div class="stat-box">
                    <span class="stat-value">2,345</span>
                    <span class="stat-label">Commits</span>
                    <div class="stat-trend positive">↑ 12%</div>
                  </div>
                  <div class="stat-box">
                    <span class="stat-value">156</span>
                    <span class="stat-label">Pull Requests</span>
                    <div class="stat-trend positive">↑ 23%</div>
                  </div>
                  <div class="stat-box">
                    <span class="stat-value">98.2%</span>
                    <span class="stat-label">Code Coverage</span>
                    <div class="stat-trend positive">↑ 3%</div>
                  </div>
                  <div class="stat-box">
                    <span class="stat-value">12ms</span>
                    <span class="stat-label">Tiempo de Respuesta</span>
                    <div class="stat-trend negative">↓ 5%</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content" data-tab="4">
              <div class="tab-section">
                <h4>👥 Equipo de Desarrollo</h4>
                <div class="team-grid">
                  <div class="team-member">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John" class="member-avatar">
                    <h5>John Doe</h5>
                    <span class="role">Tech Lead</span>
                    <div class="member-skills">
                      <span class="skill">Angular</span>
                      <span class="skill">Architecture</span>
                    </div>
                  </div>
                  <div class="team-member">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="Jane" class="member-avatar">
                    <h5>Jane Smith</h5>
                    <span class="role">Senior Developer</span>
                    <div class="member-skills">
                      <span class="skill">TypeScript</span>
                      <span class="skill">RxJS</span>
                    </div>
                  </div>
                  <div class="team-member">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" alt="Mike" class="member-avatar">
                    <h5>Mike Johnson</h5>
                    <span class="role">UI Designer</span>
                    <div class="member-skills">
                      <span class="skill">UX/UI</span>
                      <span class="skill">CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </app-tab>
        </div>
      </section>
    </div>
  `,
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent {
}
