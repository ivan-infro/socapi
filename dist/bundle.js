//# sourceMappingURL=IDialogMethods.js.map
//# sourceMappingURL=IFriendsMethods.js.map
//# sourceMappingURL=ISocialApi.js.map
//# sourceMappingURL=IUser.js.map
//# sourceMappingURL=IUsersMethods.js.map
var Infro;
(function (Infro) {
    var SocialApi;
    (function (SocialApi) {
        var Mailru;
        (function (Mailru) {
            var MailruSocialApi = (function () {
                function MailruSocialApi(key, callback) {
                    this.key = key;
                    this.init(function () {
                        console.log('init callback');
                        callback();
                    });
                    this.users = new Mailru.MailruUsersMethods(this);
                }
                MailruSocialApi.prototype.init = function (callback) {
                    var _this = this;
                    mailru.loader.require('api', function () {
                        mailru.app.init(_this.key);
                        callback();
                    });
                };
                return MailruSocialApi;
            })();
            Mailru.MailruSocialApi = MailruSocialApi;
        })(Mailru = SocialApi.Mailru || (SocialApi.Mailru = {}));
    })(SocialApi = Infro.SocialApi || (Infro.SocialApi = {}));
})(Infro || (Infro = {}));
//# sourceMappingURL=MailruSocialApi.js.map
var Infro;
(function (Infro) {
    var SocialApi;
    (function (SocialApi) {
        var Mailru;
        (function (Mailru) {
            var MailruUsersMethods = (function () {
                function MailruUsersMethods(wrapper) {
                    this.wrapper = wrapper;
                }
                MailruUsersMethods.prototype.getInfo = function (params, callback) {
                    mailru.common.users.getInfo(function (response) {
                        callback(response);
                    }, params.uids);
                };
                return MailruUsersMethods;
            })();
            Mailru.MailruUsersMethods = MailruUsersMethods;
        })(Mailru = SocialApi.Mailru || (SocialApi.Mailru = {}));
    })(SocialApi = Infro.SocialApi || (Infro.SocialApi = {}));
})(Infro || (Infro = {}));
//# sourceMappingURL=MailruUsersMethods.js.map
var Infro;
(function (Infro) {
    var SocialApi;
    (function (SocialApi) {
        var Vkontakte;
        (function (Vkontakte) {
            var VkSocialApi = (function () {
                function VkSocialApi() {
                    // TODO init? (getUsers work without init, but why фыва)
                    this.users = new Vkontakte.VkUsersMethods(this);
                }
                VkSocialApi.prototype.init = function (callback) {
                    VK.init(callback);
                };
                return VkSocialApi;
            })();
            Vkontakte.VkSocialApi = VkSocialApi;
        })(Vkontakte = SocialApi.Vkontakte || (SocialApi.Vkontakte = {}));
    })(SocialApi = Infro.SocialApi || (Infro.SocialApi = {}));
})(Infro || (Infro = {}));
//# sourceMappingURL=VkSocialApi.js.map
var Infro;
(function (Infro) {
    var SocialApi;
    (function (SocialApi) {
        var Vkontakte;
        (function (Vkontakte) {
            var VkUsersMethods = (function () {
                function VkUsersMethods(wrapper) {
                    this.wrapper = wrapper;
                }
                VkUsersMethods.prototype.getInfo = function (params, callback) {
                    VK.api('users.get', params, function (data) {
                        // TODO data.response => array of IUser
                        callback(data.response);
                    });
                };
                return VkUsersMethods;
            })();
            Vkontakte.VkUsersMethods = VkUsersMethods;
        })(Vkontakte = SocialApi.Vkontakte || (SocialApi.Vkontakte = {}));
    })(SocialApi = Infro.SocialApi || (Infro.SocialApi = {}));
})(Infro || (Infro = {}));
//# sourceMappingURL=VkUsersMethods.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbW1vbi9JRGlhbG9nTWV0aG9kcy5qcyIsIkNvbW1vbi9JRnJpZW5kc01ldGhvZHMuanMiLCJDb21tb24vSVNvY2lhbEFwaS5qcyIsIkNvbW1vbi9JVXNlci5qcyIsIkNvbW1vbi9JVXNlcnNNZXRob2RzLmpzIiwiSW1wbGVtZW50YXRpb24vbWFpbHJ1L01haWxydVNvY2lhbEFwaS5qcyIsIkltcGxlbWVudGF0aW9uL21haWxydS9NYWlscnVVc2Vyc01ldGhvZHMuanMiLCJJbXBsZW1lbnRhdGlvbi92ay9Wa1NvY2lhbEFwaS5qcyIsIkltcGxlbWVudGF0aW9uL3ZrL1ZrVXNlcnNNZXRob2RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlEaWFsb2dNZXRob2RzLmpzLm1hcCIsIi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlGcmllbmRzTWV0aG9kcy5qcy5tYXAiLCIvLyMgc291cmNlTWFwcGluZ1VSTD1JU29jaWFsQXBpLmpzLm1hcCIsIi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlVc2VyLmpzLm1hcCIsIi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlVc2Vyc01ldGhvZHMuanMubWFwIiwidmFyIEluZnJvO1xyXG4oZnVuY3Rpb24gKEluZnJvKSB7XHJcbiAgICB2YXIgU29jaWFsQXBpO1xyXG4gICAgKGZ1bmN0aW9uIChTb2NpYWxBcGkpIHtcclxuICAgICAgICB2YXIgTWFpbHJ1O1xyXG4gICAgICAgIChmdW5jdGlvbiAoTWFpbHJ1KSB7XHJcbiAgICAgICAgICAgIHZhciBNYWlscnVTb2NpYWxBcGkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTWFpbHJ1U29jaWFsQXBpKGtleSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBjYWxsYmFjaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSBuZXcgTWFpbHJ1Lk1haWxydVVzZXJzTWV0aG9kcyh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE1haWxydVNvY2lhbEFwaS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbHJ1LmxvYWRlci5yZXF1aXJlKCdhcGknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haWxydS5hcHAuaW5pdChfdGhpcy5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYWlscnVTb2NpYWxBcGk7XHJcbiAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICAgIE1haWxydS5NYWlscnVTb2NpYWxBcGkgPSBNYWlscnVTb2NpYWxBcGk7XHJcbiAgICAgICAgfSkoTWFpbHJ1ID0gU29jaWFsQXBpLk1haWxydSB8fCAoU29jaWFsQXBpLk1haWxydSA9IHt9KSk7XHJcbiAgICB9KShTb2NpYWxBcGkgPSBJbmZyby5Tb2NpYWxBcGkgfHwgKEluZnJvLlNvY2lhbEFwaSA9IHt9KSk7XHJcbn0pKEluZnJvIHx8IChJbmZybyA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1haWxydVNvY2lhbEFwaS5qcy5tYXAiLCJ2YXIgSW5mcm87XHJcbihmdW5jdGlvbiAoSW5mcm8pIHtcclxuICAgIHZhciBTb2NpYWxBcGk7XHJcbiAgICAoZnVuY3Rpb24gKFNvY2lhbEFwaSkge1xyXG4gICAgICAgIHZhciBNYWlscnU7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChNYWlscnUpIHtcclxuICAgICAgICAgICAgdmFyIE1haWxydVVzZXJzTWV0aG9kcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYWlscnVVc2Vyc01ldGhvZHMod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBNYWlscnVVc2Vyc01ldGhvZHMucHJvdG90eXBlLmdldEluZm8gPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haWxydS5jb21tb24udXNlcnMuZ2V0SW5mbyhmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHBhcmFtcy51aWRzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFpbHJ1VXNlcnNNZXRob2RzO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgICAgICBNYWlscnUuTWFpbHJ1VXNlcnNNZXRob2RzID0gTWFpbHJ1VXNlcnNNZXRob2RzO1xyXG4gICAgICAgIH0pKE1haWxydSA9IFNvY2lhbEFwaS5NYWlscnUgfHwgKFNvY2lhbEFwaS5NYWlscnUgPSB7fSkpO1xyXG4gICAgfSkoU29jaWFsQXBpID0gSW5mcm8uU29jaWFsQXBpIHx8IChJbmZyby5Tb2NpYWxBcGkgPSB7fSkpO1xyXG59KShJbmZybyB8fCAoSW5mcm8gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1NYWlscnVVc2Vyc01ldGhvZHMuanMubWFwIiwidmFyIEluZnJvO1xyXG4oZnVuY3Rpb24gKEluZnJvKSB7XHJcbiAgICB2YXIgU29jaWFsQXBpO1xyXG4gICAgKGZ1bmN0aW9uIChTb2NpYWxBcGkpIHtcclxuICAgICAgICB2YXIgVmtvbnRha3RlO1xyXG4gICAgICAgIChmdW5jdGlvbiAoVmtvbnRha3RlKSB7XHJcbiAgICAgICAgICAgIHZhciBWa1NvY2lhbEFwaSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBWa1NvY2lhbEFwaSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGluaXQ/IChnZXRVc2VycyB3b3JrIHdpdGhvdXQgaW5pdCwgYnV0IHdoeSDRhNGL0LLQsClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gbmV3IFZrb250YWt0ZS5Wa1VzZXJzTWV0aG9kcyh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFZrU29jaWFsQXBpLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVksuaW5pdChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZrU29jaWFsQXBpO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgICAgICBWa29udGFrdGUuVmtTb2NpYWxBcGkgPSBWa1NvY2lhbEFwaTtcclxuICAgICAgICB9KShWa29udGFrdGUgPSBTb2NpYWxBcGkuVmtvbnRha3RlIHx8IChTb2NpYWxBcGkuVmtvbnRha3RlID0ge30pKTtcclxuICAgIH0pKFNvY2lhbEFwaSA9IEluZnJvLlNvY2lhbEFwaSB8fCAoSW5mcm8uU29jaWFsQXBpID0ge30pKTtcclxufSkoSW5mcm8gfHwgKEluZnJvID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmtTb2NpYWxBcGkuanMubWFwIiwidmFyIEluZnJvO1xyXG4oZnVuY3Rpb24gKEluZnJvKSB7XHJcbiAgICB2YXIgU29jaWFsQXBpO1xyXG4gICAgKGZ1bmN0aW9uIChTb2NpYWxBcGkpIHtcclxuICAgICAgICB2YXIgVmtvbnRha3RlO1xyXG4gICAgICAgIChmdW5jdGlvbiAoVmtvbnRha3RlKSB7XHJcbiAgICAgICAgICAgIHZhciBWa1VzZXJzTWV0aG9kcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBWa1VzZXJzTWV0aG9kcyh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFZrVXNlcnNNZXRob2RzLnByb3RvdHlwZS5nZXRJbmZvID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBWSy5hcGkoJ3VzZXJzLmdldCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBkYXRhLnJlc3BvbnNlID0+IGFycmF5IG9mIElVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBWa1VzZXJzTWV0aG9kcztcclxuICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICAgICAgVmtvbnRha3RlLlZrVXNlcnNNZXRob2RzID0gVmtVc2Vyc01ldGhvZHM7XHJcbiAgICAgICAgfSkoVmtvbnRha3RlID0gU29jaWFsQXBpLlZrb250YWt0ZSB8fCAoU29jaWFsQXBpLlZrb250YWt0ZSA9IHt9KSk7XHJcbiAgICB9KShTb2NpYWxBcGkgPSBJbmZyby5Tb2NpYWxBcGkgfHwgKEluZnJvLlNvY2lhbEFwaSA9IHt9KSk7XHJcbn0pKEluZnJvIHx8IChJbmZybyA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZrVXNlcnNNZXRob2RzLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==