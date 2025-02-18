import EasCommand from '../../commandUtils/EasCommand';
import Log from '../../log';
import { showLoginPromptAsync } from '../../user/actions';

export default class AccountLogin extends EasCommand {
  static description = 'log in with your Expo account';
  static aliases = ['login'];

  protected mustBeRunInsideProject = false;
  protected requiresAuthentication = false;

  async runAsync(): Promise<void> {
    await showLoginPromptAsync();
    Log.log('Logged in');
  }
}
