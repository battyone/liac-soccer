// GLOBALS ====================================================================
var soccer = {};
var desktop = {};
var app;
var config;
// ============================================================================

// INITIALIZE ENVIRONMENT =====================================================
// If is running in nodejs
if (window.require) {
  
  // nodejs modules
  desktop.gui = require('nw.gui');
  desktop.fs  = require('fs');
  desktop.net = require('net');
  desktop.io  = require('socket.io');

  // node-webkit variables
  desktop.win = desktop.gui.Window.get();

  // configuration
  config = JSON.parse(desktop.fs.readFileSync('config.json', 'utf-8'));

// If is running in browser (for tests)
} else {
  desktop = null;
  config  = get_stub_config();
}
// ============================================================================


function run() {
  app = new soccer.App();
  app.initialize();
}

function get_stub_config() {
  return {
    "game": {

    },

    "display": {
      "robot1_color"   : "blue",
      "robot2_color"   : "white",
      "obstacle_color" : "green",
      "ball_color"     : "red",
      "goal_color"     : "yellow",
      "line_width"     : 2
    },

    "physics": {
      "scale"                      : 100,
      "gs_iterations"              : 128,
      "substeps"                   : 128,
      "ball_mass"                  : 1,
      "ball_damping"               : 0.5,
      "ball_friction"              : 0,
      "ball_restitution"           : 1,
      "robot_max_force"            : 50,
      "robot_max_force_inverse"    : 25,
      "robot_max_steer"            : 1,
      "robot_max_velocity"         : 8,
      "robot_max_angular_velocity" : 5,
      "robot_wheel_friction"       : 400,
      "robot_mass"                 : 10,
      "robot_damping"              : 0.0,
      "robot_friction"             : 0,
      "robot_restitution"          : 0.9
    },

    "network": {
      "robot1_ip"   : "127.0.0.1",
      "robot1_port" : 50100,
      "robot2_ip"   : "127.0.0.1",
      "robot2_port" : 50200
    }
  };
}