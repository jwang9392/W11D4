class Api::SessionsController < ApplicationController
  def destroy
    if current_user 
      log_out!
      render json: {message: 'Logged out!'}
    else  
      render json: ['You are not logged in!'], status: 404
    end
  end

  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Wrong credentials!'], status: 422
    else
      log_in!(@user)
      render "api/users/show"
    end
  end
end
