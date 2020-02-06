class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save!
      render json: ['user created']
    else
      render json: ['user not created. bad']
    end
  end

  private

  def user_params
    params.require(:user).permit(:username,:email, :password)
  end
end
