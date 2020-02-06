class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true 

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(un, pw)
    user = User.find_by(username: un)
    user && user.is_password?(pw) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypted = BCrypt::Password.new(self.password_digest)
    bcrypted.is_password?(password)
  end

end
