OPTIMIZED=$(foreach F,$1,$(dir $F)_$(notdir $F).$2)

BJSON := $(wildcard pages/*/*.bemjson.js)
HTML := $(patsubst %.bemjson.js,%.html,$(BJSON))
PREFIXES := $(patsubst %.bemjson.js,%,$(BJSON))
JS_O = $(call OPTIMIZED,$(PREFIXES),js)
CSS_O = $(call OPTIMIZED,$(PREFIXES),css)

all:: bem-bl
all:: $(HTML) $(JS_O) $(CSS_O)

CSSO_PATH=./node_modules/csso/bin/csso
UGLIFYJS_PATH=./node_modules/uglify-js/bin/uglifyjs
BORSCHIK_PATH=./node_modules/borschik/bin/borschik
BEM=bem

BEM_BUILD=$(BEM) build \
	-l bem-bl/blocks-common/ \
	-l bem-bl/blocks-desktop/ \
	-l blocks/ \
	-l $(@D)/blocks/ \
	-d $< \
	-t $1 \
	-o $(@D) \
	-n $(*F)

BEM_CREATE=$(BEM) create block \
		-l pages \
		-T $1 \
		--force \
		$(*F)

%.html: %.bemhtml.js %.css %.js %.bemhtml.js
	$(call BEM_CREATE,bem-bl/blocks-common/i-bem/bem/techs/html.js)

.PRECIOUS: %.bemhtml.js
%.bemhtml.js: %.deps.js
	$(call BEM_BUILD,bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js)

%.deps.js: %.bemdecl.js
	$(call BEM_BUILD,deps.js)

%.bemdecl.js: %.bemjson.js
	$(call BEM_CREATE,bemdecl.js)

.PRECIOUS: %.css
%.css: %.deps.js
	$(call BEM_BUILD,css)

.PRECIOUS: %.js
%.js: %.deps.js
	$(call BEM_BUILD,js)

DO_GIT=@echo -- git $1 $2; \
	if [ -d $2 ]; \
		then \
			cd $2 && git pull origin master; \
		else \
			git clone $1 $2; \
	fi

bem-bl:
	$(call DO_GIT,git://github.com/bem/bem-bl.git,$@)

.PHONY: all

_%.js: %.js
	$(UGLIFYJS_PATH) $< > $@

_%.css: %.css
	tmp=$$(mktemp -d $(TMPDIR).XXXXX)/bemchan-csso-tempfile; $(BORSCHIK_PATH) -t css -i $< -o $$tmp && $(CSSO_PATH) -i $$tmp -o $@
