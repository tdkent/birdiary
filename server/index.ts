import { app } from './src/app.js';
import { port } from './src/configs/env.config.js';

app.listen(port, () => console.log('Server active: port ' + port));
